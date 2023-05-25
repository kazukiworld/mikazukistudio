export default function refObserver(refs: Array<Object>) {
    const ioConfiguration = {
        rootMargin: '-30% 0% -30% 0%',
        threshold: 0
    };

    console.log(refs);
    
    refs.map(({ ref, action }: any) => {
        if (ref) {
            console.log(ref)
            const observer: any = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    action();
                }

            }, ioConfiguration);

            observer.observe(ref?.current);

            return () => {
                if (ref?.current) {
                    observer.unobserve(ref.current);
                }
            };
        }
    })
}