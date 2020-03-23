---
id: editor-images
title: Including Images and Videos
sidebar_label: Images
---

## Images

Markdown syntax can be used to embed images in ISLE lessons, which takes the general form

    ![Alt text](path "optional title")

To embed an image in an ISLE lesson, the image must be hosted online (since ISLE users will not have access to your local files). So for example, to include a picture of Paul the octopus from the 2010 World Cup, we could do

    ![Paul the octopus](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")

which renders to

![Paul](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG "Paul the octopus")

(hover over the image to see the title provided).

Alternatively, images can be included with custom `<Image />` tags. Since Markdown [does not currently](https://daringfireball.net/projects/markdown/syntax#img) support specifying image dimensions, you can use HTML `<Image />` syntax to include an image and change the dimension. For example, to specify dimensions for the picture of Paul the octopus:

    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200" height="200" />

which becomes

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Oktopus-Orakel_Paul_mit_Schuh.JPG/1280px-Oktopus-Orakel_Paul_mit_Schuh.JPG" width="200" height="200" />

### Uploading Images to Course Files

**But what if we want to use an image we've created locally, rather than one hosted on the web?** Well, the image will still need to be hosted, but we can do that easily by just uploading it to the ISLE course dashboard. Suppose we have the following plot that we want to embed in our lesson:

![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)

1. Go to your ISLE dashboard and select the course.
2. Click the blue **Course Data** button (pie-chart symbol) in the top bar.
3. Click **Files**.
4. Click **Upload file**; select the file you wish to upload.
5. To see the uploaded file and get the url, click **Open** next to the file name.

![Add Owner](assets/gifs/upload_file.gif)

Now you can use the url of the uploaded image to embed the image in your ISLE lesson. For example, we can include the plot above by

    ![histograms](https://isle.heinz.cmu.edu/Demo_histograms.png)

<br />

## Videos

As with images, videos must be hosted online (such as on YouTube) to be embedded in an ISLE lesson. To include a video, you can use ISLE's custom `<VideoPlayer />` tag. For example, to include [this](https://www.youtube.com/watch?v=wPqtzj5VZus) video of Trevor Hastie speaking on gradient boosting, we could use

    <VideoPlayer url="https://www.youtube.com/watch?v=wPqtzj5VZus" />
    
This tag also provides several customization options, including the dimensions of the embedded video, whether or not it plays automatically, and the start time of the video. Full details can be found in the [ISLE docs](https://isledocs.com/docs/video-player).
