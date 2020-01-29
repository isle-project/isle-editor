---
id: examples
title: Examples of ISLE Use Cases
sidebar_label: Examples
---

ISLE can be used for many different types of lessons. Here we cover a few examples that we've found useful in our own courses.

## Labs

At Carnegie Mellon University, we have used ISLE in introductory statistics labs for several years. [Lab 1](https://isle.stat.cmu.edu/demo-course/lab01/) in 36-200 covers the basics of variables types and some plots. You can find the source ISLE file for this lab at <https://isle.stat.cmu.edu/demo-course/lab01/index.isle>.

### Sample Template

    ---
    title: "Lab"
    author: Your Name
    date: 
    require:
        dataFile:
        dataInfoFile:
    state:
        ---

    # Project Title

    ## Description

    Here you can give a project description...

    <DataExplorer
        data={dataFile}
        dataInfo={dataInfoFile}
        categorical={[]}
        continuous={[]}
        distributions={[]}
    />
    
    <Pages>
        <div>
        <FreeTextQuestion
            question="Here is a free text question"
        />
        </div>

        <div>
        <NumberQuestion
            question="Here is a number question" 
        />
        </div>
    </Pages>


## Projects

ISLE can also be used to to create data analysis projects for students. The [NYC housing project](https://isle.heinz.cmu.edu/Demo/nyc_project_example/) is an example of a data analysis project using New York housing data. You can find the source ISLE file for this project at <https://isle.heinz.cmu.edu/Demo_nyc_project_example.isle>.

### Sample Template

    ---
    title: "Project"
    author: Your Name
    date: 
    require:
        dataFile:
        dataInfoFile:
    state:
        ---

    # Project Title

    ## Description

    Here you can give a project description...

    <DataExplorer
        data={dataFile}
        dataInfo={dataInfoFile}
        categorical={[]}
        continuous={[]}
        distributions={[]}
    />

## Lecture Slides

The ISLE Sketchpad can be used to display PDF [lecture slides](https://isle.heinz.cmu.edu/Demo/sample_lecture_slides/), which can be annotated in the Sketchpad and interspersed with ISLE questions for students to work on. The example shown here is courtesy of Chris Genovese and Mikael Kuusela of Carnegie Mellon University. The source file is at <https://isle.heinz.cmu.edu/Demo_sample_lecture_slides.isle>.

### Sample Template

    ---
    title: "Lecture Slides"
    author: Your Name
    date: 
    state:
    ---

    <Sketchpad
        fullscreen
        pdf="https://isle.heinz.cmu.edu/week4T_1537277814854.pdf"
        nodes={{
            '19': {
                component: <FreeTextQuestion
                    question="Please describe what the murkiest point has been for you in the course so far?"
                />
            },
            '37': {
                component: <FreeTextQuestion
                    question="Please describe what the murkiest point has been for you today?"
                />
            }
        }}
    />

## Video Lectures

An ISLE [video lecture](https://isle.heinz.cmu.edu/Demo/sample_video_lecture/) is useful for creating a lesson that includes video lecture components combined with other ISLE components like questions and data analysis. The example linked here is courtesy of Marian Frazier at The College of Wooster, who has created video lectures for use in flipped classroom instruction. The source file is at <https://isle.heinz.cmu.edu/Demo_sample_video_lecture.isle>.

### Sample Template

    ---
    title: "Video Lecture"
    author: Your Name
    date: 
    state:
        ---

    <VideoLecture 
        steps={[
            'https://www.youtube.com/watch?v=wPqtzj5VZus',
            <FreeTextQuestion
                question="Here is a free text question"
            />
        ]}
    />

## Homework

Finally, ISLE can be used for homework assignments that involve writing and data analysis. Here is a [homework example](https://isle.heinz.cmu.edu/Demo/nyc_hw_example/) using the NYC housing data. The source file is at <https://isle.heinz.cmu.edu/Demo_nyc_hw_example.isle>.

### Sample Template

    ---
    title: "Homework"
    author: Your Name
    date: 
    require:
        dataFile: 
        dataInfoFile: 
    state:
        ---

    ## Instructions

    HW instructions go here...

    <DataExplorer
            data={dataFile}
            dataInfo={dataInfoFile}
            categorical={[]}
            quantitative={[]}
            distributions={[]}
            editorTitle="Answers"
            questions={<Text raw={`
            1. text here...
        
            2. text here...
            `} />}
    />
