# Blogger
A full-stack web app using Django DRF, React and PostgreSQL where multiple users can Register and Log In and perform CRUD operation on thier blog posts. 
Technologies Used:

 - `Backend`: Django REST Framework (DRF), Django ORM, PostgreSQL(Provided by Railway),

 - `Frontend`: React, React Router,Redux Toolkit, Daisy UI 

 - `Development Tools`: Git, VSCode, Postman, Vite

## Setup Instructions
1. **Clone the repository**
   ```
   git clone https://github.com/taukirsheikh/blogger.git
   ```
2. `backend setup` <br>
3. **Go to backend directory**
    ```
    cd backend
    ```
4. **Setup and activate a virtual environment if you want**
    ```
    python -m venv myenv
    source myenv/bin/activate  # On macOS/Linux
    myenv\Scripts\activate  # On Windows
    ```
5. **Install backend dependencies:**
    ```
    pip install -r requirements.txt
    ```

  *PostgreSQL is already configured and hosted on railway.* <br>
6. **Start the development server:** <br>
    ```bash
    python manage.py runserver
    ```
The server will start running at `http://127.0.0.1:8000/` <br>

For Frontend setup
go to frontend directory
```bash
cd ..
cd frontend
```
8. **Install dependencies:**
    ```bash
    npm install
9. **Run the development server:**
    ```bash
    npm run dev
10.**Open your browser:**
    `Visit http://localhost:5173 to view the app.`

That's it! You should now have the Blogger app up and running on your local machine.
 ## Screenshots
 **Home Page**
![Home Page](https://cdn.discordapp.com/attachments/747123409934352431/1235501953941897256/image.png?ex=66349a5c&is=663348dc&hm=d50d1136997803cefc1bb1e6b07e5a0718a9076a1629fa1296bc1e0eaa365b1f&)

**Blog Post**
![](https://cdn.discordapp.com/attachments/747123409934352431/1235502001895243826/image.png?ex=66349a67&is=663348e7&hm=85b0eb232bb5383b01eaf405061cd44e2c1e9deacd075186f5c5c26948f23429&)

**Register**
<br>
![register](https://cdn.discordapp.com/attachments/747123409934352431/1235502306561101844/image.png?ex=66349ab0&is=66334930&hm=b1ca3e8a0c052a8cb4c0ba6a33ebb5d550ccd24378772660e16fb40b05fd646a&)

**Log In** 
<br>
![log in](https://cdn.discordapp.com/attachments/747123409934352431/1235502261581385728/image.png?ex=66349aa5&is=66334925&hm=e2418da5aa6a862a26816d48e6747d26e1f8a974ddcd83b4ce57aaa51b95f4a2&)

**Create Blog**
<br>
![create blog](https://cdn.discordapp.com/attachments/747123409934352431/1235502071881404427/image.png?ex=66349a78&is=663348f8&hm=2906dfc64d9262f53613b4d6ef482a9848e61be4211a1b7678dd2aa918085ca8&)

**Blog List**
![](https://cdn.discordapp.com/attachments/747123409934352431/1235502203154862140/image.png?ex=66349a97&is=66334917&hm=8b1a091e9557810b1057cc09b19161e3483b6adc43a6bcd42e12ff1b297183fe&)

**Update Blog**
![Update Blog](https://cdn.discordapp.com/attachments/747123409934352431/1235505231484289034/image.png?ex=66349d69&is=66334be9&hm=a28b56f0c40cca95fa7d37eb4b50f4eec8718e7938a794396c5db738887033b3&)
