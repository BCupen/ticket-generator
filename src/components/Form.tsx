import FormHeading from "./FormHeading"
import Name from "./Name"
import UploadAvatar from "./UploadAvatar"

const Form = () => {
  return (
    <form className="w-full grid place-items-center gap-4">
        <FormHeading />
        <UploadAvatar />
        <Name />
    </form>
  )
}

export default Form