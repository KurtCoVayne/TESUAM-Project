import Carousel from '@/components/ui/homepage/carrousel';
import InfiniteCarousel from '@/components/ui/homepage/infinitecarrousel';
import Stadistics from '@/components/ui/homepage/stadistics';
import Projects from '@/components/ui/homepage/projects';
import Stories from '@/components/ui/homepage/stories';
import Volunteer from '@/components/ui/homepage/volunteer';
import Faq from '@/components/ui/homepage/faq';
import Contact from '@/components/ui/homepage/contact';
import { carrouseldata } from '@/lib/utils';
import { Suspense } from 'react';
import LazyLoadComponent from '@/components/ui/common/LazyLoadComponent';
export default function Home() {
  return (
    <main className="flex flex-col text-center justify-center items-center">
      <div className="w-full flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Carousel data={carrouseldata}>
          </Carousel>
        </Suspense>
            <InfiniteCarousel />
        <div className="">
          <LazyLoadComponent>
            <Suspense fallback={<div>Loading...</div>}>
              <Stadistics />
            </Suspense>
          </LazyLoadComponent>
          <Projects />
          <Stories />
          <Volunteer />
          <LazyLoadComponent>
            <Suspense fallback={<div>Loading...</div>}>
              <Faq />
            </Suspense>
          </LazyLoadComponent>
          <Contact />
        </div>
      </div>
    </main>
  )
}