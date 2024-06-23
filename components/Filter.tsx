import React from 'react'
import { Button } from './ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Filter = () => {
    return (
        <div className="flex justify-between gap-6">
            <Button variant={"darkBg"}>
                <img src="/icons/filter.svg" alt="" />
                Filter
            </Button>
            <div className="flex items-center gap-4">
                <p className='paragraph hidden 2sm:block text-grey-900'>Sort By</p>
                <Select>
                    <SelectTrigger className="w-[147px] text-grey-900">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Relevance</SelectItem>
                        <SelectItem value="dark">Relevance</SelectItem>
                        <SelectItem value="system">Relevance</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default Filter