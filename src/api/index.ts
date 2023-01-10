// 导出 Local 接口

import { CacheModel } from "./local/cache"

import { ConfigModel } from "./local/config"
import { DomainModel } from "./local/domain"
import { MachineModel } from "./local/machine"
import { SocketModel } from "./local/socket"
import { SSHKeyModel } from "./local/sshkey"
import { TATModel } from "./local/tat"
import { UserModel } from "./local/user"
import { VendorModel } from "./local/vendor"
import { WorkhubModel } from "./local/workhub"
import { WorktaskModel } from "./local/worktask"

export const Api = {
    cache: new CacheModel(),

    config: new ConfigModel(),
    domain: new DomainModel(),
    machine: new MachineModel(),
    socket: new SocketModel(),
    sshkey: new SSHKeyModel(),
    tat: new TATModel(),
    user: new UserModel(),
    vendor: new VendorModel(),
    workhub: new WorkhubModel(),
    worktask: new WorktaskModel(),
}

// 导出 QCloud 接口

import { CamModel } from "./qcloud/cam"
import { DnspodModel } from "./qcloud/dnspod"
import { LighthouseModel } from "./qcloud/lighthouse"
import { MonitorModel } from "./qcloud/monitor"
import { TATModel as QTATModel } from "./qcloud/tat"

export const QApi = {
    cam: new CamModel(),
    dnspod: new DnspodModel(),
    lighthouse: new LighthouseModel(),
    monitor: new MonitorModel(),
    tat: new QTATModel(),
}
