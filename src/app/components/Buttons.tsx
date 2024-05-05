'use client';

type Props = {
    title: string;
    borderStyle?: string;
    onPress?: () => void;
}

export function OutlinedButton ({title, borderStyle}: Props){
   return <button className={`border-2 border-inherit text-white py-1 px-2 ${borderStyle} rounded text-xs`}>{title}</button>
}


export function LinearButton({title, onPress}: Props) {
    return <button 
    onClick={onPress}
    className="button-linear p-2 rounded font-satoshi-bold text-sm w-full w-80">
        {title}
    </button>
}