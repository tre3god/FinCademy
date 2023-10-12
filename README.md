
![fincademy_logo3](https://github.com/tre3god/FinCademy/assets/124702698/40bc3aa2-d4ae-4205-b03d-db187ff50cce)
---
# FinCademy - Financial Literacy E-Learning Platform 🎓💰

## Table of Contents

1. [Introduction](#introduction)
2. [Planning](#planning)
3. [Features](#features)
4. [Technologies](#technologies)
5. [Deployment](#deployment)
6. [Usage](#usage)
7. [Future Developments](#future-developments)

---

## Introduction

Financial literacy is more crucial than ever in today's fast-paced world. FinCademy aims to empower users by providing a well-rounded, easy-to-understand guide to financial literacy. From the basics like budgeting and saving to more advanced topics like investment and retirement planning, FinCademy provides an array of courses and resources for all users.

---

## Planning

- **Trello Board**: The team listed out various user stories for the e-learning platform on the [Trello board](https://trello.com/b/dUDCGMn6/project-3). The user stories are sorted out into the MVP as well the Icebox. As progress was made on the e-learning platform, the user stories were sorted into their right locations respectively (WIP/completed).

<img width="1421" alt="Screenshot 2023-10-12 at 6 01 19 PM" src="https://github.com/tre3god/FinCademy/assets/124702698/1cb95199-ae68-46a5-97aa-9a573f255b7b">


- **Wireframe**: Based on the user stories which were listed out by the team, the team then created a [Figma wireframe](https://www.figma.com/file/6gmkSZuAMDI25RBv8hmiaE/Project-3---E-Learning-Platform-for-Financial-Literacy?type=whiteboard&node-id=0-1&t=5eElqKAEfjk6i8ll-0) to conceptualise how the FinCademy website would look like. During the creation of the website, several changes were made to the design but the wireframe served as a useful guide for the foundation that needed to be built.

<img width="16384" alt="Project 3 - E-Learning Platform for Financial Literacy" src="https://github.com/tre3god/FinCademy/assets/124702698/1c0cc813-5f7b-4ff4-9caf-a47baf32a721">

- **ERD**: The team also did up the Entity Relationship Diagram ([ERD](https://lucid.app/lucidchart/09dc7bdd-520f-41d8-9312-5ef9105101a9/edit?invitationId=inv_15befe1e-5c87-4bfa-aa0c-c912bd6210fc&referringApp=slack&page=0_0#)) for the various models that we intended to have from the start.

![Screenshot 2023-10-12 at 11 53 10 PM](https://github.com/tre3god/FinCademy/assets/124702698/90a702d9-38ce-4801-aecb-f65cef6cf749)

## Features

- **User-Friendly Interface**: Simple and intuitive design for easy navigation.
- **Wide Variety of Courses**: Courses covering multiple topics, from the basics of financial literacy all the way to planning for your retirement. 
- **Test Your Knowledge**: Assess your knowledge through the quiz at the end of each course.
- **Course Reviews**: Share and read reviews to enhance your learning journey.
- **Mobile Responsiveness**: Learn on-the-go, accessible on all devices.

---

## Technologies

- **Frontend**: ReactJS, React-Bootstrap
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Others**: JWT for authentication, Markdown for course content

---

## Deployment

Jump into the financial literacy e-learning world of FinCademy [here](https://fincademy.onrender.com/).

---

## Usage

1. Arrive at the landing page of FinCademy.
<img width="1057" alt="Screenshot 2023-10-13 at 1 55 27 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/2d9a5c26-6097-4e08-9fca-2b37d277174b">
2. Click on "Courses" to browse courses freely without an account. <br/>
3. Simply click on "Sign Up" if you wish to enroll in a course or login to pick up where you left off.</br>
4. When exploring the list of available courses, you may wish to sort by the highest rated course, alphabetical order or the the number of results in a page.
<img width="1034" alt="Screenshot 2023-10-13 at 2 11 19 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/5a460c8d-536a-49ef-9ee3-0d63d88e4868">
5. Click the "Read More" button on each course for more details. Remember, you must be signed in!<br/>
6. In the course information page, you can learn more about the course through the description or read what other learners had to say about the course. Once you're ready, click on "Enroll" to... you guessed it, enroll in a course. Simple!
<img width="989" alt="Screenshot 2023-10-13 at 2 07 45 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/c4983b69-9c38-4cde-8623-49ca66d945a8"> <br/>
7. Once enrolled, you will be redirected to your profile and dashboard, click on the course title to begin your learning journey or unenroll if the course no longer interests you.
<img width="1074" alt="Screenshot 2023-10-13 at 1 59 16 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/ea7d7e70-3cd4-4849-ba4c-958ad44e440d">
8. The course content page is where you find your course materials. Pro tip: Read through the materials careful before you attempt the quiz at the end to assess your knowledge.
<img width="1074" alt="Screenshot 2023-10-13 at 1 59 16 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/df7f0081-d9ba-41ca-9687-71f4203483be">

9. You can attempt the quiz as many times as you like and you'll need to complete at least 1 quiz in order to leave a review.<br/>
10. Your dashboard should show you an option to leave a review once you've completed a quiz. Go ahead, share your thoughts!.
<img width="1074" alt="Screenshot 2023-10-13 at 2 22 46 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/4e80951b-7cd2-4bfd-acb5-1db9f2502f72">
11. Changed your mind about something you said about a course? Fret not, just click on the blue "Review" button again to make your edits!
12. If the courses aren't really to your liking or if the quizzes were too simple, you could try to create them! You can create courses by clicking on "Courses" on the nav bar and click "Create a Course".
<img width="1074" alt="Screenshot 2023-10-13 at 2 26 50 AM" src="https://github.com/tre3god/FinCademy/assets/124702698/e525ba06-aea6-40c1-9477-70d529f3519f">
13. Fill the form to create your very own course! Do note that contents should be in markdown string! <br/>
14. If you wish to upload a photo that embodies your course, just upload your picture onto a image hosting platform like Imgur and copy the URL.<br/>
15. Don't forget to create a quiz too - located at the foot of your course content page. This encourages other users to read through your content carefully. <br/>
16. Congratulations! You've created your first course on FinCademy! If your content is good, students will be flocking to your course.
---

## Future Developments

- **Different types of users**: Course creation will only be available to registered creators which they can use the platform to materialize and market their own courses.

- **Subscription payments**: Upon expressing their desire to enrol for a course, students will be re-directed to make payment for the course. On the other end, course creators will be able to generate revenue from their courses.
