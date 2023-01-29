// 导出 Local 接口

import { CacheModel } from "./local/cache"

import { ConfigModel } from "./local/config"
import { DomainModel } from "./local/domain"
import { MachineModel } from "./local/machine"
import { SSHKeyModel } from "./local/sshkey"
import { TaskHistoryModel } from "./local/task_history"
import { TaskScriptModel } from "./local/task_script"
import { TerminalModel } from "./local/terminal"
import { UserModel } from "./local/user"
import { VendorModel } from "./local/vendor"
import { WorkhubModel } from "./local/workhub"

export const Api = {
    cache: new CacheModel(),

    config: new ConfigModel(),
    domain: new DomainModel(),
    machine: new MachineModel(),
    sshkey: new SSHKeyModel(),
    taskHistory: new TaskHistoryModel(),
    taskScript: new TaskScriptModel(),
    user: new UserModel(),
    vendor: new VendorModel(),
    workhub: new WorkhubModel(),
    terminal: new TerminalModel(),
}

// 导出 Qcloud 接口

import { QcloudVendor } from "./basic/qcloud"

import { CamModel } from "./qcloud/cam"
import { DnspodModel } from "./qcloud/dnspod"
import { LighthouseModel } from "./qcloud/lighthouse"
import { MonitorModel } from "./qcloud/monitor"
import { TATModel } from "./qcloud/tat"

export const QApi = {
    vendor: QcloudVendor,

    cam: new CamModel(),
    dnspod: new DnspodModel(),
    lighthouse: new LighthouseModel(),
    monitor: new MonitorModel(),
    tat: new TATModel(),
}

