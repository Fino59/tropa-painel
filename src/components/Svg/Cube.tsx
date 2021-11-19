import React from "react";

export default function Cube({ size = 64, color = "#E3E3E3" }) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 40L19.871 39.9352L0 29.9989V9.99888L0.128966 9.9341L20 0L20.129 0.0647829L40 10.0011V30.0011L39.871 30.0659L20 40ZM0.515863 29.742L20 39.484L39.4841 29.742V10.258L20 0.516028L0.515863 10.258V29.742Z" fill="{color}"/>
        <path d="M0.452388 9.96135L0.195282 10.3487L19.8677 20.1441L20.1248 19.7568L0.452388 9.96135Z" fill="{color}"/>
        <path d="M39.552 9.96441L19.8683 19.7542L20.1252 20.1416L39.8089 10.3519L39.552 9.96441Z" fill="{color}"/>
        <path d="M20.2579 19.9486H19.7421V39.7409H20.2579V19.9486Z" fill="{color}"/>
        </svg>

    )
}