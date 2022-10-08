import { HeroPopularServicePreview } from './hero-popular-service-preview'

export const HeroPopularServices = ({categories, onSetFilter}) => {

    return (
        <div className="hero-popular-services">
            Popular
            {categories.slice(0,4).map(category => <HeroPopularServicePreview key={category.title} category={category} onSetFilter={onSetFilter}/>)}
        </div>
    )
}