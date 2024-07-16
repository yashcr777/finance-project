"use client"; 

import { useMountedState } from "react-use";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheets"
import { EditAccountSheet } from "@/features/accounts/components/edit-account-sheet";

import { NewCategorySheet } from "@/features/categories/components/new-category-sheets";
import { EditCategorySheet } from "@/features/categories/components/edit-category-sheet";
export const SheetProvider=()=>{
    const isMounted=useMountedState();
    if(!isMounted)return null;
    return (
        <>
            <NewAccountSheet/>
            <EditAccountSheet/>

            <NewCategorySheet/>
            <EditCategorySheet/>
        </>
    );
};