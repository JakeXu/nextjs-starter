# Next.js Full-stack Starter

Welcome to use the **Next.js Full-stack Starter** template! It provides a starting point for creating full-stack applications with Next.js.

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Next-Auth](https://img.shields.io/badge/Next%20Auth-931DD8?style=for-the-badge&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-3074C0?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=077EA5)
![Ant Design](https://img.shields.io/badge/AntDesign-0C6CFF?style=for-the-badge&logo=antdesign&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-13924F?style=for-the-badge&logo=mongodb&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CF649A?style=for-the-badge&logo=sass&logoColor=white)

## Features ⚡

- **NextAuth:** Integration of NextAuth for authentication, providing support for various authentication providers.
- **TypeScript:** Developed with TypeScript for type safety and improved developer experience.
- **MongoDB:** Integration with MongoDB for database management and storage.
- **Ant Design:** Includes Ant Design for UI components, providing a sleek and modern design out of the box.
- **Styling:** Style using CSS, SASS, SCSS, or CSS-in-JS.

![Screenshot](./public/assets/screenshots/homepage.png)

---

## How to use 🤔

To get started with this template, you just need to follow these simple steps:

1. Clone the repository:

   ```
   git clone git@github.com:JakeXu/nextjs-starter.git
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Move `.env.example` file to `.env` and add the values for the following keys:

   ```
    NEXTAUTH_URL=
    NEXTAUTH_SECRET=

    GOOGLE_ID=
    GOOGLE_CLIENT_SECRET=

    GITHUB_ID=
    GITHUB_CLIENT_SECRET=

    MONGODB_URI=
   ```

4. Run locally

   ```
   yarn dev
   ```

5. [New OAuth App](https://github.com/settings/developers) if not exist, copy **Client ID** & **Client secrets** to `.env`

   
6. [New Database](https://cloud.mongodb.com/) for testing
   > **0.0.0.0/0** must be added to the whitelist

### License

Starter is [MIT licensed](./LICENSE).
