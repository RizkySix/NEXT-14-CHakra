"use client"
import { Spinner } from "@chakra-ui/react";

export default function SpinnerLoader() {
    return (
        <>
         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Spinner size="xl" color="white" />
            </div>
        </>
    )
}