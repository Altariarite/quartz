I want to replicate @dhh's smooth workflow experience in https://omarchy.org/ and found a very minimalistic and effective way to manage windows like that on mac with only 1 extra software. 

The whole philosophy is there's actually no need for different workspaces. Instead, you think in terms of windows and displays. At any given time, there are either a full window, or 2 windows side by side on a display. And you go to a specific window by pressing a shortcut.

## Setting this up

First we need to install [Raycast](raycast.com). 

In Raycast - Advanced - Hyper Key set a hyper key. I chose left ctrl because my ctrl is rebound to capslock.

![[image/Pasted image 20250819175744.png]]
Then in Extensions, search for the applications you want to quickly switch to and set up shortcut for them, like `Hyper + B` for browser or `Hyper + T` for terminal.

![[image/Pasted image 20250819180155.png]]
In System Settings - Keyboard - keyboard shortcuts - Windows, set Arrange Window, and other shortcuts as you see fit. I chose 
`Hyper + HJKL` as this is very natural to a vim user. (Did you know mac had built-in window management shortcut? I didn't until today)

And that's it!

The inspiration comes from Josean Martinez's video https://www.youtube.com/watch?v=DBifQv9AYhc