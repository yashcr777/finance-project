"use client"; 

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheets"

export const SheetProvider=()=>{
    const isMounted=useMountedState();
    if(!isMounted)return null;
    return (
        <>
            <NewAccountSheet/>
        </>
    );
};