import { Ajax } from '../util/ajax'

enum ActionEnum {
  OpenAndWatch = 'openAndWatch',
  StopWatching = 'stopWatching',
  NoteIsWatched = 'noteIsWatched',
}

export class NoteActionApi {
  constructor(private ajax: Ajax) {}

  openAndWatch(noteId: string): Promise<void> {
    return this.baseAction(ActionEnum.OpenAndWatch, noteId)
  }

  stopWatching(noteId: string): Promise<void> {
    return this.baseAction(ActionEnum.StopWatching, noteId)
  }

  /**
   * @deprecated 已废弃，请使用 {@link isWatch}
   * @param noteId
   */
  async noteIsWatched(noteId: string): Promise<boolean> {
    return this.isWatch(noteId)
  }

  async isWatch(noteId: string): Promise<boolean> {
    return this.baseAction(ActionEnum.NoteIsWatched, noteId)
  }

  private async baseAction(action: ActionEnum, noteId: string): Promise<any> {
    return this.ajax.post<any>('/services/externalEditWatcher', {
      action,
      noteId,
    })
  }
}
