const express = require('express');
const bodyParser = require('body-parser') 
const path = require('path')

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {

    res.send("
    <?xml version="1.0" encoding="utf-8"?>
    <android.support.constraint.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".LoginActivity">
    
        <TextView
            android:id="@+id/textView2"
            android:layout_width="93dp"
            android:layout_height="25dp"
            android:layout_marginEnd="172dp"
            android:layout_marginLeft="154dp"
            android:layout_marginRight="172dp"
            android:layout_marginStart="154dp"
            android:layout_marginTop="42dp"
            android:text="Login"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent" />
    
        <EditText
            android:id="@+id/usernameLogin"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="55dp"
            android:ems="10"
            android:hint="Username"
            android:inputType="textPersonName"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/textView2" />
    
        <EditText
            android:id="@+id/passwordLogin"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="40dp"
            android:ems="10"
            android:hint="Password"
            android:inputType="textPassword"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/usernameLogin" />
    
        <Button
            android:id="@+id/button"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="29dp"
            android:onClick="login"
            android:text="login"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/passwordLogin" />
    </android.support.constraint.ConstraintLayout>");
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
})


app.listen(PORT);

