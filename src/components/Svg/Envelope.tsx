import React from "react";

export default function Envelope ({ size = 64, color = "#E3E3E3" }) {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.9973 32.6593H0V0H40V32.6593H39.9973ZM0.538975 31.9796H39.461V0.679695H0.538975V31.9796Z" fill="{color}"/>
            <path d="M39.9973 40H0V35.2115H0.538975V39.3203H39.4583V35.2115H39.9973V40Z" fill="{color}"/>
            <path d="M19.9987 18.7426L5.59726 7.74852L5.87753 7.16398L19.9987 17.9473L34.1198 7.16398L34.4001 7.74852L19.9987 18.7426Z" fill="{color}"/>
        </svg>


    );
}