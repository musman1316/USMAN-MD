/**
===========================================================================================//
//    ██╗   ██╗███████╗███╗   ███╗ █████╗ ███╗   ██╗    ███╗   ███╗██████╗        //
//    ██║   ██║██╔════╝████╗ ████║██╔══██╗████╗  ██║    ████╗ ████║██╔══██╗      //
//    ██║   ██║███████╗██╔████╔██║███████║██╔██╗ ██║    ██╔████╔██║██║  ██║      //
//    ██║   ██║╚════██║██║╚██╔╝██║██╔══██║██║╚██╗██║    ██║╚██╔╝██║██║  ██║      //
//    ╚██████╔╝███████║██║ ╚═╝ ██║██║  ██║██║ ╚████║    ██║ ╚═╝ ██║██████╔╝      //
//     ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═════╝         //
===========================================================================================//
 Copyright (C) 2022.                                                                                        
 Licensed under the  GPL-3.0 License;                                                      
 You may not use this file except in compliance with the License.    
 It is supplied in the hope that it may be useful                                     
 * @project_name : USMAN-MD                                                                   
 * @author : usmanser123 <https://github.com/usmanser123>   
 * @description : USMAN-MD,A Multi-functional whatsapp bot.       
 * @version 1.0.1                                                                                             
 ========================================================
 **/
 
const {cmd,tlang,sleep} = require('../lib')
cmd({
        pattern: "restart",
        desc: "To restart bot",
        category: "tool",
        filename: __filename
    },
    async(Void, citel,text,{ isCreator }) => {
   if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            citel.reply('Restarting')
            await sleep(2000)
            exec('pm2 restart all')
    }
);
