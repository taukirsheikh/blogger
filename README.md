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
 

