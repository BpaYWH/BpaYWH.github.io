import Image from "next/image";

const responsiveWidth = "";
const responsiveHeight = "";

function Robocoach() {
  return (
    <div className="px-8">
      <div id="title" className="flex gap-8">
        <h1 className="text-4xl">
          Robocoach
        </h1>
        <div className="relative w-[80px] h-[80px]">
          <Image src="/assets/image/Robocoach/logo.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div id="content">
        <div>
          Text Description
          <p>
          - Mobile application developed by the Sports AI Lab enables students to track and evaluate exercises like sit-ups, skip-rope, and planking using their smartphone's front-facing camera.
- AI-powered movement analysis accurately assesses exercise correctness and tracks progress, providing valuable insights for teachers and parents to monitor students' exercise habits.
- Features a leaderboard for students to compete and improve together, while teachers can access a web portal to view student progress and set targets for gradual performance improvement.
          </p>
        </div>

        <div>
          Image Description
          <div className="relative w-[120px] h-[120px]">
            <Image src="/assets/image/Robocoach/robocoach-1.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>

          <div className="relative w-[120px] h-[120px]">
            <Image src="/assets/image/Robocoach/robocoach-2.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>

          <div className="relative w-[120px] h-[120px]">
            <Image src="/assets/image/Robocoach/robocoach-3.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Robocoach