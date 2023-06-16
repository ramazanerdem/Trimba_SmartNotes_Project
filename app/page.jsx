import Feed from '../components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share & Interact
        <br className="max-md:hidden" />{' '}
        <span className="orange_gradient text-center">
          Team-Powered Smart Notes.
        </span>
      </h1>
      <p className="desc text-center">
        Trimba is an open source smart note-taking tool that makes it easy to
        interact with your team.
      </p>
      <Feed />
    </section>
  )
}
export default Home
