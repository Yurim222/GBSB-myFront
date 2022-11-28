import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

export default function loginBoard() {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const data = new FormData(e.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return(
        <Container component="main" maxWidth="xs">
            <Box componenet="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField 
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    type="password"
                    label="패스워드"
                    name="password"
                    autoComplete="current-password"
                />
                <button type="submit">로그인</button>
            </Box>
        </Container>
    );
};