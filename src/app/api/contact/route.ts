import { NextResponse } from "next/server";
import { afterEach } from "node:test";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        console.log("Datos de envío\n", body);

        return NextResponse.json({
            success: true,
            message: "Mensaje recibido"
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Error en el envío del formulario" },
            { status: 500 }
        );
    }
}