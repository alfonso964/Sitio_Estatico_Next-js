// components/ThemeSelect.js
"use client";

export default function ThemeSelect() {
    return (
        <select className="select select-bordered" data-choose-theme>
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
            <option value="cupcake">Cupcake</option>
            <option value="bumblebee">Bumblebee</option>
        </select>
    );
}
