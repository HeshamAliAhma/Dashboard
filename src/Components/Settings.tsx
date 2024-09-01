import BackupManager from "./Settings/BackupManager"
import GeneralInfo from "./Settings/GeneralInfo"
import SecurityInfo from "./Settings/SecurityInfo"
import SiteControl from "./Settings/SiteControl"
import SocialInfo from "./Settings/SocialInfo"
import WidgetsControl from "./Settings/WidgetsControl"

interface IProps {

}

const Settings = ({}:IProps) => {
  return (
    <main className="grid lg:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 gap-4">
        <SiteControl/>
        <GeneralInfo/>
        <SecurityInfo/>
        <SocialInfo/>
        <WidgetsControl />
        <BackupManager/>
    </main>
  )
}

export default Settings