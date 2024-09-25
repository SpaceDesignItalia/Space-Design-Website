import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="SavvyCal"
        src="https://upload.wikimedia.org/wikipedia/commons/8/86/Cartier_logo.svg"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Laravel"
        src="https://edtechitalia.org/wp-content/uploads/2024/04/loghi-6.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Tuple"
        src="https://www.tenutefarina.it/assets/logo-YxWOvqLy.png"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
      <img
        alt="Transistor"
        src="https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/305750951_523589766436229_950592531489781154_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MVzYAm-eRJMQ7kNvgF1-jHl&_nc_ht=scontent-fco2-1.xx&_nc_gid=ARaBF_yvB0V3hpH3Jjp7KdJ&oh=00_AYCNL-HI2Qa7RV-bZx4tRzH697Av7tj4MyR6kD8rxiK-jA&oe=66F8F124"
        className="h-9 max-sm:mx-auto sm:h-8 lg:h-12"
      />
    </div>
  )
}
