interface ContactProps {
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

const Contact = ({ githubUrl, linkedinUrl, email }: ContactProps) => {
  return (
    <section className='py-20 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-8'>Contact</h2>
        <div className='flex justify-center gap-8'>
          <a href={githubUrl} target='_blank' rel='noreferrer noopener' className='text-gray-300 hover:text-white'>GitHub</a>
          <a href={linkedinUrl} target='_blank' rel='noreferrer noopener' className='text-gray-300 hover:text-white'>LinkedIn</a>
          <a href={'mailto:' + email} className='text-gray-300 hover:text-white'>Email</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
