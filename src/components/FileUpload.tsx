"use client"

import { Inbox } from "lucide-react"
import { useDropzone } from "react-dropzone"


const FileUpload = () => {
    const {getRootProps, getInputProps} = useDropzone({
        accept:{"application/pdf":(".pg")}
    })
  return (
<div className="p-2 bg-white rounded-xl">
    <div {...getRootProps({
        className:"border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center "
    })}>
        <input  {...getInputProps()}/>
        <>
        <Inbox className="W-10 H-10 text-blue-500" />
      <p className="mt-2 text-sm text-slate-400">Drop PDF here</p>
        </>
    </div>
</div>
  )
}
export default FileUpload