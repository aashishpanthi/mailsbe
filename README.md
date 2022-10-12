# Mailsbe

**Suppose**, you have applied for a job through an email. You have sent the email two days ago but you haven't gotten any response. And you don't know if the employer read your email or not. Well no need to worry now because I have a solution for that, **introducing Mailsbe**.

## Introduction

**Mailsbe** is an MIT Licensed open source project and a platform with the help of which you can find out if the Email sent by you has **been read or not**. It is a simple platform that has been designed by keeping the **user's privacy **in mind. We don't ask for full email read/write access. Instead, we provide a simple way to find the status if your email **respecting your privacy**.

## Tech stack

It doesn't involve a very much complicated tech stack. Instead, it uses only a few technologies like React and Nhost.

- **React** -> For frontend part
- **Nhost** -> For user authentication, database, hosting and serverless function

> If you don't know about Nhost then simply put it as a firebase alternative. Even officially, Nhost is called an open-source Firebase alternative with GraphQL.

## Process

I am not going to explain all of the technical jargon here, instead, I will take you through the working process of the project.

First of all, you need to create an account. Then only you can access your dashboard. Inside of your dashboard, you will see the list of emails you have sent and complete detail about them. If you haven't sent any emails then you can send one by clicking on compose button on the top left side of the page.

No, you can't send emails from here. Instead, you will be provided an image (1x1 transparent pixel) which you can copy and paste to the email client from where you are sending the email. Then fill out some more information about the email (it will make it easy to find the email in the future) and click save.

After you sent your email, you can now access the status of the email on the dashboard. The status is either _seen_ or _unseen_. The status will be updated when the receiver opens up the email you sent. And the serverless function helps to do that by accepting the receiver's request and updating it on the database.
