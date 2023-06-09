const Textarea = ({ disabled = false, className, ...props }) => (
    <textarea
        disabled={disabled}
        className={`${className} block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
        {...props}
    />
)

export default Textarea