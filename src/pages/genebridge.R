library(shinythemes)
library(shiny)
library(dplyr)
library(ggplot2)
library(ggrepel)

ui <- fluidPage(
  # Choose a theme
  theme = shinytheme("readable"),
  
  # Application title
  titlePanel("Gene and Moudles"),
  
  # Sidebar for number of class outputs : 
  # Input file; Threshold of foldchange and p.adj
  sidebarPanel(
    #    textInput("txt", "Text input:", "text here"),
    numericInput("species",
                 label = "Seltected Species is:",
                 value = "Arabidopis thaliana",
                 ),
    numericInput("genemodule",
                 label = "Gene or Module name is:",
                 value = 'AT1G010010',
                ),
    hr(),
    submitButton("Submit"),
    fileInput("filename", 
              "Choose Gene List File to Upload:", 
              accept = c(".csv")),
    hr(), 
  ),
  
  #Tab1 for sample plot, Tab2 for lable plot
  mainPanel(
    tabsetPanel(
        tabPanel("G-MAD-gene",
               fluidRow(
                 column(width = 9,
                        plotOutput("gmadgplot", height = 500)
                 ),
                 column(width = 2,
                        downloadButton("download_plot",label = "Download")
                 )
               )),
        tabPanel("G-MAD-module",
               fluidRow(
                 column(width = 9,
                        plotOutput("gmadmplot", height = 500)
                 ),
                 column(width = 2,
                        downloadButton("download_plot",label = "Download")
                 )
               )),
        tabPanel("M-MAD-module",
               fluidRow(
                 column(width = 9,
                        plotOutput("mmadplot", height = 500)
                 ),
                 column(width = 2,
                        downloadButton("download_plot",label = "Download")
                 )
               )),
    )
  )
)

server <- function(input, output) {
  # file upload
  filedata <- reactive({
    infile <- input$filename
    if (is.null(infile)){
      return(NULL)
    }
    read.csv(infile$datapath,sep = ",", header = T, stringsAsFactors = F)
  })
  
  # function for g-mad-g plot
  g_mad_g_plot <- function(species, genemodule, type){
      file.input <- paste0(species, "--", type, "_", genemodule, ".gz")
      gf <- gzfile(file.input, 'rt')
      df <- read.table(gf, header=F,sep='\t',quote='',check.names=F)
      plot.data <- df[c(1,-2,-1),]
      names(plot.data) <- c("name", "value", "pathway")
      plot.data$pos <- 1:nrow(plot.data)
      plot.data$size <- 0.2
      ymin <- min(plot.data$value)
      ymax <- max(plot.data$value)
      plot.data[which(plot.data$value>=0.1),'size'] <- 2*abs(plot.data[which(plot.data$value>=0.1),'value'])
      plot(plot.data$pos, plot.data$value, pch=19, cex=plot.data$size, ylim=c(ymin, ymax),xlab="Module Name",ylab="GMAD",xaxt='n',las=2,cex.lab=1.5,cex.axis=1.2,bty='n')
      box(lwd=2)
      df <- filedata()
  }
  #function
  sample_plot <- function(){
    df <- filedata() %>% as.data.frame()
    names(df) <- c("geneid", "log2foldchage", "padj")
    df$padj <- -log10(df$padj)
    df$change <- as.factor(ifelse(df$padj > input$padj & abs(df$log2foldchage) > input$foldchange,
                                  ifelse(df$log2foldchage > input$foldchange,'UP','DOWN'),'NOT'))
    
    p <- ggplot(data = df, aes(x = log2foldchage, y = padj, color = change)) +
      geom_point(alpha=0.8, size = 1) +
      theme_bw(base_size = 15) +
      theme(
        panel.grid.minor = element_blank(),
        panel.grid.major = element_blank()) +
      scale_color_manual(name = "", values = c("red", "green", "black"), limits = c("UP", "DOWN", "NOT")) +
      geom_hline(yintercept = input$padj, linetype = "dashed", color = "grey", size = 1) +
      geom_vline(xintercept = -input$foldchange, linetype = "dashed", color = "grey", size = 1) +
      geom_vline(xintercept = input$foldchange, linetype = "dashed", color = "grey", size = 1)
    p
  }
  
  signed_plot <- function(){
    df <- filedata() %>% as.data.frame()
    names(df) <- c("geneid", "log2foldchage", "padj")
    df$padj <- -log10(df$padj)
    df$change <- as.factor(ifelse(df$padj > input$padj & abs(df$log2foldchage) > input$foldchange,
                                  ifelse(df$log2foldchage > input$foldchange,'UP','DOWN'),'NOT'))
    df$sign <- ifelse(df$padj > input$padj & abs(df$log2foldchage) > input$foldchange, df$geneid,NA)
    
    p <- ggplot(data = df, aes(x = log2foldchage, y = padj, color = change)) +
      geom_point(alpha=0.8, size = 1) +
      theme_bw(base_size = 15) +
      theme(
        panel.grid.minor = element_blank(),
        panel.grid.major = element_blank()) +
      scale_color_manual(name = "", values = c("red", "green", "black"), limits = c("UP", "DOWN", "NOT")) +
      geom_text_repel(aes(label = sign), box.padding = unit(0.2, "lines"), point.padding = unit(0.2, "lines"), show.legend = F, size = 3) +
      geom_hline(yintercept = input$padj, linetype = "dashed", color = "grey", size = 1) +
      geom_vline(xintercept = -input$foldchange, linetype = "dashed", color = "grey", size = 1) +
      geom_vline(xintercept = input$foldchange, linetype = "dashed", color = "grey", size = 1)
    p
  }
  
  #simple volcano plot
  output$sampleplot <- renderPlot({
    if (!is.null(filedata())){
      sample_plot()
    }
  })
  
  #signed volcano plot
  output$signplot <- renderPlot({
    if (!is.null(filedata())){
      signed_plot()
    }
  })
  
  #Download
  output$downloadplot <- downloadHandler(
    filename = function(){
      paste0("volcano", ".png")
    },
    contentType = "image/png",
    content = function(file){
      png(file)
      print(sample_plot())
      dev.off()
    }
  )
}

shinyApp(ui = ui, server = server)