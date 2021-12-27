import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/mushroom-header.jpg';

export default function Home() {
  return (
      <>
        <div className={styles.banner}>
          <Image src={banner} layout='intrinsic' width={1200} height={800}/>
        </div>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in diam elit. Donec congue dolor feugiat, volutpat nibh quis, facilisis ante. Duis hendrerit ut velit vel vestibulum. Cras maximus purus at lorem fringilla efficitur. Mauris maximus, dui in imperdiet tristique, justo risus fermentum risus, a consequat ex sem ac sapien. Vivamus pharetra tincidunt accumsan. Sed sed ipsum in ex volutpat hendrerit. Nam porta tortor sed odio faucibus dictum. Aliquam eu velit est. Sed mollis fringilla velit porttitor dapibus.</p>

        <p>Aliquam congue sollicitudin iaculis. Maecenas pellentesque tincidunt velit, in blandit orci dictum non. Nulla interdum nulla gravida volutpat iaculis. Integer consequat nunc sed diam volutpat, a commodo est dignissim. Nunc imperdiet purus leo, non maximus sapien lobortis vitae. Vestibulum id lobortis nulla. Integer eleifend varius ipsum a mattis. Aliquam bibendum vel augue non semper.</p>

        <p>Suspendisse sed tincidunt metus. Maecenas eget risus vel lorem imperdiet pulvinar. Suspendisse eget facilisis risus. Mauris venenatis dapibus risus, id lacinia elit mollis dapibus. Vestibulum felis sapien, dictum a tortor sit amet, finibus finibus mi. Cras venenatis molestie facilisis. Maecenas interdum lectus massa, sit amet interdum nunc faucibus sed. Proin sollicitudin, neque at ullamcorper semper, justo nulla hendrerit eros, id accumsan arcu justo quis nunc.</p>
      </>
  )
}