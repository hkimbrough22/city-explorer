# City Explorer

**Author**: Haustin Kimbrough
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

City Explorer is a React application that queries the user(s) for a location (city), request an API from [LocationIQ](https://locationiq.com/), and then display that location through imagery/mapping. City Explorer also informs users of request errors.

![WRRC](./wrrc.png)

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->
To create City Explorer for yourself, create a React application and a repository. Link those two together. Within a code editor, create an input field that calls for user response and links that to an API request with LocationIQ. Pull the relevant data (latitude and longitude) from that LocationIQ response and assign it to another API request also to LocationIQ to retrieve the map data and display the map in its own React-Bootstrap component.

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->
 City Explorer is a React application that uses JavaScript and JSX. API calls are sent to LocationIQ. The components are styled with CSS3 and [React Bootstrap](https://react-bootstrap.github.io/) and the repository is on [Github](https://github.com/hkimbrough22/city-explorer).

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

### Lab 06 - Feature 1

Name of feature: Locations

Estimate of time needed to complete: 90 minutes

Start time: _____

Finish time: _____

Actual time needed to complete: _____

### Lab 06 - Feature 2

Name of feature: Maps

Estimate of time needed to complete: 45 minutes

Start time: _____

Finish time: _____

Actual time needed to complete: _____

### Lab 06 - Feature 3

Name of feature: Errors

Estimate of time needed to complete: 60 minutes

Start time: _____

Finish time: _____

Actual time needed to complete: _____

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
- Marco worked with me to create the WRRC
- [Code Fellows Code 301 Class Repo](https://github.com/codefellows/seattle-code-301d77) for .gitignore