import { createContext, useContext, useState } from "react";

export const isEditedContext = createContext();

export function IsEditedProvider(props) {
    const [isEdited, setIsEdited] = useState(false);

    return (
        <isEditedContext.Provider value={{ isEdited, setIsEdited }}>
            {props.children}
        </isEditedContext.Provider>
    );
}

export function useSpotEditedContext() {
    return useContext(isEditedContext);
}