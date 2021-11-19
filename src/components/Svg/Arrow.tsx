import React from "react";

export default function Arrow({ size = 64, color = "#E3E3E3" }) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.5658 0L40 7.40371L17.7736 29.531H39.3429V40H0V0.832546H10.5159V21.9516L32.5658 0ZM39.2316 7.40371L32.5631 0.764969L9.97013 23.2572V1.37316H0.540321V39.4594H38.7999V30.0716H16.4621L39.2316 7.40371Z" fill="{color}"/>
        </svg>


    )
}