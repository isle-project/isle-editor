---
id: editor-images
title: Including Images and Videos
sidebar_label: Images
---

## Images

Markdown syntax can be used to embed images in ISLE lessons, which takes the general form

    ![Alt text](path "optional title")

This way, we can easily embed images that are hosted online in an ISLE lesson. for example, to include a picture of Paul the octopus from the 2010 World Cup, we could do

    ![Paul the octopus](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")

which renders to

![Paul](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")

(hover over the image to see the title provided).

Alternatively, images can be included with custom `<Image />` tags. Since Markdown [does not](https://daringfireball.net/projects/markdown/syntax#img) support specifying image dimensions, you can use HTML `<Image />` syntax to include an image and customize its width and height. For example, to specify dimensions for the picture of Paul the octopus:

    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200px" height="200px" />

which becomes

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200" height="200" />

Most commonly, you want to only set either the width or the height and set the other one to `auto` to not stretch the image and preserve its original aspect ratio. Common ways of setting the dimensions is as pixels (e.g.,`200px`) or in percent of the containing block (e.g., `20%`).

### Uploading Images to Course Files

**But what if we want to use an image we've created locally, rather than one hosted on the web?** The ISLE course dashboard provides an easy to to upload files. Suppose we have the following plot that we want to embed in our lesson:

![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)

1. Go to your ISLE dashboard and select the course.
2. Click the blue **Course Data** button (pie-chart symbol) in the top bar.
3. Click **Owner Files**.
4. Click the green **Upload file** button; select the file you wish to upload.
5. To see the uploaded file and get the url, click **Open** next to the file name or use the button to directly copy the URL into your clipboard.

![Add Owner](/gifs/upload_file.gif)

Now you can use the url of the uploaded image to embed the image in your ISLE lesson. For example, we can include the plot above by

    ![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)

<br />

## Videos

As with images, videos must be hosted online (such as on YouTube) to be embedded in an ISLE lesson. To include a video, you can use ISLE's custom `<VideoPlayer />` tag. For example, to include [this](https://www.youtube.com/watch?v=wPqtzj5VZus) video of Trevor Hastie speaking on gradient boosting, we could use

    <VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />
    
This tag also provides several customization options, including the dimensions of the embedded video, whether or not it plays automatically, and the start time of the video. Full details can be found in the [ISLE docs](https://isledocs.com/docs/video-player).
