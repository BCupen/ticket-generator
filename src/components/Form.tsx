import FormHeading from "./FormHeading"
import UploadAvatar from "./UploadAvatar"

const Form = () => {
  return (
    <form className="w-full grid place-items-center gap-4">
        <FormHeading />
        <UploadAvatar />
    </form>
  )
}

export default Form