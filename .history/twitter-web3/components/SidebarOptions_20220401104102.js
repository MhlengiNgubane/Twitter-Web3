

const style = {
    wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `font-medium`,
    textActive: `font-bold`
}

function SidebarOptions({ text, Icon, isActive, setSelected, redirect }) {
  return (
    <div
        className={style.wrapper}
        onclick={() => {
            setSelected(text)
        }}
    >
        <div className={style.iconContainer}>
            <
        </div>
      
    </div>
  );
}

export default SidebarOptions;
