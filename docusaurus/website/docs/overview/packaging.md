---
id: packaging
title: Exporting lessons
sidebar_label: Exporting lessons
---

To bundle an ISLE lesson as a single-page application, go to the "Export" page inside the editor. Lessons can be uploaded to an ISLE course or exported locally by selecting an output directory. It is suggested to keep both the **Minify** and **Load ISLE resources from CDN** options checked as the reduction in file size due to minification is beneficial when the exported lesson is served over the Internet and using ISLE code via a CDN instead of including it in the exported bundle allows for multiple lessons to share code, further decreasing the amount of data viewers of the lessons have do download when accessing the page.

When uploading your lesson, you may choose whether to make the lesson immediately available to students (by setting "Release to Students?" to `active`) or whether it should remain hidden for students for now. In the latter case, you will need to activate the lesson later on from your ISLE dashboard.

The checkbox for "Show in Gallery?" allows you to either keep the lesson `private` or make it available to other instructors on the lesson gallery of the dashboard (when set to `public`).

After the export process is finished, the lesson is either available online at the chosen location or can be found the chosen output directory. The exported lesson is viewable in any major and current web browser, and can be easily hosted on personal websites, GitHub pages or any other hosting service.

![Export gif](/gifs/export.gif)
