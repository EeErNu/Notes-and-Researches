# AMP Summary 

## Main Concept
The main idea of AMP is to make a mobile website super lite so it can be reached from a mobile device faster, whithout loading irrelevant/useless/heavy information or data.

## How it works
Things to know before working with AMP.
1. All simple html tags must replaced with AMP analogs. Read more here(https://www.ampproject.org/docs/reference/spec#html-tags) or here(https://www.ampproject.org/docs/reference/components).
2. Some CSS tags are NOT allowed in AMP pages. Read more here(https://www.ampproject.org/docs/guides/responsive/style_pages).
3. All media elements must have width and height
4. AMP page can have only one embedded stylesheet. External stylesheets cannot be included.
5. All scripts must be asynchronos.

In order we want to have APM and non-AMP versions at the same time - we should link pages. Read more here(https://www.ampproject.org/docs/tutorials/create/prepare_for_discovery). 

Here is a part of Documentation that helps to setup Dev Environment(https://developers.google.com/web/tools/setup/), if the help is needed...

## Advantages/Disadvantages
**What is good:** <br/>
The consept and idea is great.

**What is bad:** <br/>
1. There are many restrictions we must to follow. Performance will raise  
2. As AMP makes the website super lite in order to load it faster - the complex sripts/styles will not work. That means if the website based on heavy scripts/styles, we do not want to use AMP.

## Conclusion based on Documentation 
This tool is definitely useful if we have **one-page websites**, **information/news related websites** etc..; in other words, after reading and analyzing the documentations I can assume that the tool is not the best solutions for websites that ordering/purchasing as their main consept. More over, uning this tool for online stores might confuse the customers... To make the final conclusion two Prototypes have to be created: First one to setup a new project to see how the technology works in practice; Second one to see how difficult is it to convert an already created project into AMP standart.

## Prototype
For the testing purpose the prototype was created.

**Things that have to be mantioned:** <br/>

First, it is possible to show only one specific tweet/tweets with <amp-twitter> but not all news feed(if it necessary to post all company's feed list to keep readers updated, for example), which still can be done with twitter widget though. However, if the blog is about a tricky question and requires some references on specialists opinions - <amp-twitter> is a must have tag to use.

Second, some tags are not working in Google Chrome and Chromium desktop browsers(<amp-twitter>, for example).

In firefox <amp-twitter> tag not always displayed like a programmer wants it to be displayed. With the same code some tweets have pictures/videos below the tweet and some above. Of course, that can be fixed with additional code, but why different tweets displays in a different way - is a misterious magic to me. 

## Results
The prototype was developed and tested in 3 different browsers: Firefox, Chrome and Cromium. The last one was picked as during the development process many bugs occured in Chrome. After detailed tasting I came into conclusion that Chrome and Cromium worked fine with all the websited that are not based on APM as, APM-project makes them act 'buggy'. That is why, the only browser that worked fine with the technology was Firefox.

Although, AMP works in Firefox far better than in other browsers, there are many things that bugs and even copying the documentation example has a chance not to work. 

In the end, I find the tool pretty unstable and hard to work with as it is pretty unpredictable. Therefore, I suggest not to use it and to wait for a stable version.

