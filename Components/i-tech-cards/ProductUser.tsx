import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {UserResponse} from "../../lib/type/user";
import Image from "next/image";

export function ProductUserCard({id, name,avatar,roles}:UserResponse) {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src={avatar}
            
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">{id}</Badge>
                </CardAction>
                <CardTitle>{name}</CardTitle>
                <CardDescription>
                    {roles}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">View Event</Button>
            </CardFooter>
        </Card>
    )
}
