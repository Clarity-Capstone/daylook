"use client"
import React, { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode
  handleClick?: () => void;
  buttonText?: string;
  image?: string | React.ReactNode;
  buttonIcon?: string | React.ReactNode;
}


const MeetingModal = ({ isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon }: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col border-none bg-dark-1 px-6 py-9 text-white"></div>
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="image" width={72} height={72} />
            </div>
          )}
          {/*ORINGAL GIVING ME DIALOGTITLE ERROR <h1 className={cn('text-3xl font-bond leading- [42px]', className)}>{title}</h1> */}
          <DialogTitle className={cn('text-3xl font-bold leading-[42px]', className)}>
            {title}
          </DialogTitle>
          {children}
          <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" onClick={handleClick}>
            {buttonIcon && (
              <Image src={buttonIcon} alt="button icon" width={13} height={13} />
            )} &nbsp;
            {buttonText || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog >
  )
}

export default MeetingModal