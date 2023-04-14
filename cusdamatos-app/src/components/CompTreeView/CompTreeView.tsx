import { TreeItem, TreeItemContentProps, TreeItemProps, TreeView, useTreeItem } from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from "react-router-dom";
import { clsx } from 'clsx';

declare module "@mui/lab/TreeItem" {
    interface TreeItemContentProps {
        link: string;
    }
}

export default function CompTreeView() {

    const navigator = useNavigate()
    const CustomContentTreeItem = React.forwardRef(function CustomContent(
        props: TreeItemContentProps,
        ref
    ) {
        const {
            classes,
            label,
            nodeId,
            icon: iconProp,
            expansionIcon,
            displayIcon,
        } = props;

        const {
            disabled,
            expanded,
            selected,
            focused,
            handleExpansion,
            preventSelection,
        } = useTreeItem(nodeId);

        const icon = iconProp || expansionIcon || displayIcon;
        const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            preventSelection(event);
          };
        
        const handleExpansionClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            handleExpansion(event);
        };
    
        const handleSelectionClick = (link : string, event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            navigator(link)
        };

        //TODO da capire cosa fare con clsx className
        return (
            <div
                className={clsx(classes.root, {
                    [classes.expanded]: expanded,
                    [classes.selected]: selected,
                    [classes.focused]: focused,
                    [classes.disabled]: disabled,
                })}
                style={{display:'flex', flexDirection:'row', justifyContent:'left', marginLeft: 30}}
                onMouseDown={handleMouseDown}
                ref={ref as React.Ref<HTMLDivElement>}>
                <Typography
                    sx={{cursor:'pointer'}}
                    onClick={() => {handleSelectionClick(props.link)}}
                    component="div"
                    className={classes.label}>
                    {label}
                </Typography>
                <div 
                    style={{marginLeft: 15, cursor:'pointer'}}
                    onClick={handleExpansionClick} 
                    className={classes.iconContainer}>
                    {icon}
                </div>
            </div>
          );
    })

    function CustomTreeItem(props: TreeItemProps) {
        return <TreeItem ContentComponent={CustomContentTreeItem} {...props} />;
    }

    return (
        <TreeView
            aria-label="icon expansion"
            defaultCollapseIcon={<ExpandLessIcon />}
            defaultExpandIcon={<ExpandMoreIcon />}
            >
            <CustomTreeItem 
                nodeId="1" label="Atleti"
                ContentProps={
                    {
                        link: "/"
                    } as any
                }>
                <CustomTreeItem 
                    nodeId="2" label="Gestione Iscrizioni"
                    ContentProps={
                        {
                            link: "/fighters"
                        } as any
                    }
                />
            </CustomTreeItem>
        </TreeView>
    );
}