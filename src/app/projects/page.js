import './page.css'
import Project from '@/components/Project/Project'

export default function Projects() {
  return (
    <div className="tile is-parent is-vertical">
      <article className="tile is-child notification">
          <Project
              title="Loyalty web app for busineses and clients."
              description="Responsive web app for customers to accumulate purchases and redeem 
                            them for free products or promotions, while business owners can create
                            promotions, analyze statistics and improve their strategy."
              technologies={['ReactJS', 'Firebase']}
              role="FullStack Developer"
              duration="1 Year"
          />      
      </article>
    </div>
  )
}
