import React from 'react';
import Tabs from "./tabs";
import TabsButtons from "./tabsButtons";

interface Tab {
    title: string;
    content: any;
}
const TabsMenu:React.FC<{tabs: Tab[], stickyTabsButtons?: any}> = (props: {tabs: Tab[], stickyTabsButtons?: any}) => {
    return (
        <div>
            <TabsButtons titles={props.tabs.map((tab) => tab.title)} stickyButtons={props.stickyTabsButtons}></TabsButtons>
            <Tabs tabs={props.tabs.map((tab) => tab.content)}></Tabs>
        </div>
    );
};

export default TabsMenu;