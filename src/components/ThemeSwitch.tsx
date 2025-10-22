"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Switch } from "./ui/switch"
import { Label } from "./ui/label"
import { Moon, Sun } from "lucide-react"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
   <div className="flex items-center gap-2">
    {theme === "dark" ? (<Moon />) : (<Sun />)}
      <Label htmlFor="theme-switch" className="cursor-pointer">
        {theme === "dark" ? "Dark" : "Light"}
      </Label>
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  )
}