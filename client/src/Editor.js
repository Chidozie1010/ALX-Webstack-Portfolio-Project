import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}


const Editor = ({value, onChange}) => {
    return (
        <ReactQuill value={value} 
                    theme={'snow'}
                    modules={modules} 
                    onChange={onChange}
                    className="editor"
         />
    )
}

export default Editor