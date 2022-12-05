**Home page for CFC Club**

Welcome to the repository for the first ever CFC Learner Project: Our homepage!

**Important Info about Github Pages)**

*   we will be using Github pages to ultimately host this website. It is perfect for our needs, as it gives us a free environment to host a few static pages and files for our website. There will be no "backend" for this project as of right now, meaning that the project will run the same (for the most part) locally on your computer and remotely on github pages.
*   the file system inside of this repository will correspond to all the routes on our Github pages. For example, if there is a file called a.js inside of a folder b.js (./b/a.js, . being our home directory) then on Github pages, you can get to that file by going to ./b/a.js as well.
*   -   This rule applies to all files except for files named index.html. You can go to a folder without specifying a file, and it will automatically load an index.html if it finds one. For example, if our website was hosted on test.com, going to test.com would give the same result as going to test.com/index.html. This trick works in any folder, and we will use it to make clean routes such as "/about" and "/info", etc. in the future.
*   -   unfortunately browsers aren't smart like this and will bring you to the directory, where you have to select the index.html file manually. However, up on the web on Github pages, they will do this for you automatically.
*   unfortunately the "/" keyword for relative urls won't work in this case, neither Github pages nor our local browsers will understand it properly. Instead, we have to use the "." symbol will put the context in the local directory, while ".." will put the context in the parent directory. Please l use relative URLs so that the project can be opened both locally and on github pages

**Code Formatting**
* I use Prettier as the code formatter for this project, and there is a prettier config file attached in the root directory of this project. I use the vscode extension, which automatically picks up this file and formats everything correctly.
